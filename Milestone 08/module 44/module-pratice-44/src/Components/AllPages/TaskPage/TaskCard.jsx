import { CircleDollar } from '@gravity-ui/icons';
import { Card, Link } from '@heroui/react';

const TaskCard = ({ taskDetails }) => {
  const { title, description, status } = taskDetails;
  console.log(taskDetails);

  return (
    <div>
      <Card className="w-[400px]">
        <CircleDollar
          aria-label="Dollar sign icon"
          className="text-primary size-6"
          role="img"
        />
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Header>
        <Card.Footer>
          <Link
            aria-label="Go to Acme Creator Hub (opens in new tab)"
            href=""
            rel="noopener noreferrer"
            target="_blank"
          >
            Show Details
            <Link.Icon aria-hidden="true" />
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default TaskCard;
