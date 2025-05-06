import { Button } from "@/components/ui/Button";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

const errorBoundaryContent = {
  button: "Go Back",
  errorMessage: {
    404: {
      heading: "404 - Page Not Found",
      paragraph: "Sorry, the requested page does not exist",
    },
    default: {
      heading: "Oops! Unexpected Error",
      paragraph: "Something went wrong. Please try again!",
    },
  },
};

const getErrorMessage = (
  error: unknown
): { heading: string; paragraph: string } => {
  if (isRouteErrorResponse(error) && error?.status === 404) {
    return errorBoundaryContent.errorMessage[error.status];
  }
  return errorBoundaryContent.errorMessage.default;
};

export const ErrorBoundary = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  const { heading, paragraph } = getErrorMessage(error);

  return (
    <div>
      <h4 className="text-secondary">{heading}</h4>
      <p className="text-secondary">{paragraph}</p>

      <Button
        size="xl"
        variant="secondary"
        className="text-secondary"
        onClick={() => navigate(-1)}
      >
        <span>{errorBoundaryContent.button}</span>
      </Button>
    </div>
  );
};
