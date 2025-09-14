import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import { memo, type JSX } from 'react';

export type ConclusionModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  bodyText: string;
};

export type ConclusionModalForm = {
  conclusion: string;
};

function SimpleModalProto({
  open,
  onClose,
  onSubmit,
  title,
  bodyText,
}: ConclusionModalProps): JSX.Element {
  return (
    <Dialog open={open}>
      <DialogTitle display="flex" justifyContent="center">
        <Typography variant="h5" component="span">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContentText variant="h6" sx={{ padding: '0 50px 20px' }}>
        {bodyText}
      </DialogContentText>
      <DialogActions sx={{ padding: '0 20px 20px 0' }}>
        <Button onClick={onSubmit} variant="contained" color="success">
          Delete
        </Button>
        <Button onClick={onClose} variant="contained" color="error">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export const SimpleModal = memo(SimpleModalProto);
