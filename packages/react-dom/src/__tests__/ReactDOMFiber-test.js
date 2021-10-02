<p {...expectHTML} />
      </div>,
    );
  });

  it('should unwind namespaces on uncaught errors', () => {
    function BrokenRender() {
      throw new Error('Hello');
    }

    expect(() => {
      assertNamespacesMatch(
        <svg {...expectSVG}>
          <BrokenRender />
        </svg>,
    
