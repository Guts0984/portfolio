import SyntaxHighlight from "./SyntaxHighlight";
import Thumbnail from "./Thumbnail";

function MdxLayout({ children }: { children: React.ReactNode }) {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <div className="container mx-auto max-w-4xl px-5 md:px-0">
      <div className="w-full">
        <div className="prose max-w-none dark:prose-invert">
          <Thumbnail />
          {isProduction ? (
            <SyntaxHighlight>{children}</SyntaxHighlight>
          ) : (
            <div>{children}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MdxLayout;
