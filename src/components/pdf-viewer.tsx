import { useCallback, useEffect, useRef, useState } from 'react';

import PSPDFKit, { Instance } from 'pspdfkit';

import ExternalTools from './external-tools';
// import { loadButton } from '@/buttons';

import icon from '../assets/logo.svg?raw';

function PdfViewer() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [instance, setInstance] = useState<Instance | null>(null);

  const loadDocument = useCallback(
    async (container: HTMLDivElement, document: string) => {
      PSPDFKit.unload(container);

      const instance = await PSPDFKit.load({
        container,
        document,
        baseUrl: `${window.location.protocol}//${window.location.host}/${
          import.meta.env.BASE_URL
        }`,
        toolbarItems: [
          ...PSPDFKit.defaultToolbarItems,
          { type: 'content-editor' },
          {
            type: 'custom',
            id: 'my-button',
            title: 'Load',
            icon: icon,
            onPress: () => {},
          },
          // loadButton(),
        ],
      });

      setInstance(instance);

      return instance;
    },
    []
  );

  useEffect(() => {
    const container = containerRef.current!;

    loadDocument(container, 'document.pdf');

    return () => {
      PSPDFKit.unload(container);
    };
  }, [containerRef, loadDocument]);

  return (
    <>
      <ExternalTools instance={instance} setInstance={setInstance} />
      <div
        ref={containerRef}
        id="viewer"
        style={{ width: '100%', height: 'calc(100vh - 48px)' }}
      />
    </>
  );
}

export default PdfViewer;
