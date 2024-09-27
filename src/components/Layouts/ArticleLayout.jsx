import { SidebarLayout } from "./SidebarLayout";
import Breadcrupms from "@/components/ui/breadcrupms";
import PropTypes from "prop-types";
export default function ArticleLayout({ children, links }) {
  return (
    <>
      <SidebarLayout>
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="mx-auto flex max-w-2xl flex-col pb-4">
            <div className="mt-8">
              <Breadcrupms links={links} />
            </div>
            <div className="py-4">{children}</div>
          </div>
        </div>
      </SidebarLayout>
    </>
  );
}

ArticleLayout.propTypes = {
  children: PropTypes.node,
  links: PropTypes.array,
};
