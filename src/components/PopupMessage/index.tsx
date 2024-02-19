import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface PopupMessageProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  mode: 'success' | 'info' | 'warning' | 'error';
}

const PopupMessage = ({ isOpen, onClose, message, mode }: PopupMessageProps) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={3000}
      onClose={onClose}
      message={message}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      role='alert'
    >
      <Alert
        onClose={onClose}
        severity={mode}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default PopupMessage;