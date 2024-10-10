import { Dispatch } from 'react';

import PSPDFKit, { Instance } from 'pspdfkit';
import { readBinaryFile, writeBinaryFile } from '@tauri-apps/api/fs';
import { open, save } from '@tauri-apps/api/dialog';

import { Button } from './ui/button';

type ExternalToolsProps = {
  instance: Instance | null;
  setInstance: Dispatch<Instance | null>;
};

function ExternalTools({
  instance,
  setInstance,
}: Readonly<ExternalToolsProps>) {
  if (!instance) return <div>Loading viewer</div>;

  const loadDocument = async () => {
    const selected = await open({
      filters: [
        {
          name: 'PDF',
          extensions: ['pdf'],
        },
      ],
      multiple: false,
    });

    if (selected && !Array.isArray(selected)) {
      const binArray = await readBinaryFile(selected);

      PSPDFKit.unload('#viewer');

      const instance = await PSPDFKit.load({
        container: '#viewer',
        baseUrl: `${window.location.protocol}//${window.location.host}/${
          import.meta.env.BASE_URL
        }`,
        document: binArray.buffer,
      });

      setInstance(instance);
    }
  };

  const saveDocument = async () => {
    const buffer = await instance?.exportPDF();
    const arr = new Uint8Array(buffer!);
    const path = await save({
      filters: [{ name: 'PDF', extensions: ['pdf'] }],
    });

    if (path) {
      await writeBinaryFile(path, arr);
    }
  };

  const removePage = () => {
    instance?.applyOperations([
      {
        type: 'removePages',
        pageIndexes: [0],
      },
    ]);
  };

  const test = () => {
    // instance?.setViewState((viewState) =>
    //   viewState.set('sidebarMode', PSPDFKit.SidebarMode.ANNOTATIONS)
    // );

    console.warn('Clicked ');

    instance?.setToolbarItems(() => {
      return [];
    });
  };

  return (
    <div style={{ display: 'flex', gap: 6, padding: 4 }}>
      <Button onClick={loadDocument}>Load</Button>
      <Button onClick={saveDocument}>Save</Button>
      <Button onClick={removePage}>Remove</Button>
      <Button onClick={test}>Test</Button>
    </div>
  );
}

export default ExternalTools;
