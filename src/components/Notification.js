const Notification = ({ notification }) => {
  return (
    <div
      className={
        notification ? "notification-container show" : "notification-container"
      }
    >
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;
