import type { FunctionComponent } from "react";

interface StoryDetailedErrorDisplayProps {
  error: Error;
}

const StoryDetailedErrorDisplay: FunctionComponent<
  StoryDetailedErrorDisplayProps
> = ({ error }: StoryDetailedErrorDisplayProps) => {
  console.log(error.cause);
  return (
    <div>
      ERROR IS OCCURED: {error.name} {error.message}
    </div>
  );
};

export default StoryDetailedErrorDisplay;
