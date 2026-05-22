import Button from "../common/Button";

const BookingCard = ({
  booking,
  role,
  onAccept,
  onComplete,
  onCancel,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <h4 className="font-semibold">{booking.serviceName}</h4>

      <p className="text-sm text-gray-600">
        Status: <span className="font-medium">{booking.status}</span>
      </p>

      <p className="text-sm text-gray-600">
        Date: {new Date(booking.date).toLocaleDateString()}
      </p>

      <div className="flex gap-2 mt-3">
        {role === "vendor" && booking.status === "pending" && (
          <Button onClick={() => onAccept(booking._id)}>
            Accept
          </Button>
        )}

        {role === "vendor" && booking.status === "accepted" && (
          <Button variant="secondary" onClick={() => onComplete(booking._id)}>
            Complete
          </Button>
        )}

        {(role === "user" || role === "vendor") &&
          booking.status !== "completed" && (
            <Button
              variant="danger"
              onClick={() => onCancel(booking._id)}
            >
              Cancel
            </Button>
          )}
      </div>
    </div>
  );
};

export default BookingCard;