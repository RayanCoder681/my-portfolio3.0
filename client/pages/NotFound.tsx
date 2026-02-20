import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout.tsx";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl font-bold text-foreground mb-4">
              404
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
              Page Not Found
            </p>
            <p className="text-lg text-foreground/60">
              Sorry, the page you're looking for doesn't exist. It might have
              been moved or deleted.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              to="/"
              className="inline-flex px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity items-center justify-center gap-2"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex px-6 py-3 border border-border hover:border-primary text-foreground font-semibold rounded-lg transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
