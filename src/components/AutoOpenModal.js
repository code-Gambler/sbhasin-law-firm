import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function AutoOpenModal() {
  const [open, setOpen] = React.useState(false);

  // Automatically open the modal when the component is mounted
  React.useEffect(() => {
    setOpen(true);
  }, []);

  const handleAccept = () => {
    setOpen(false);
  };

  const handleDecline = () => {
    window.open('about:blank', '_self').close();
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxHeight: '80vh',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <Typography
          id="modal-title"
          variant="h6"
          component="h2"
          sx={{ p: 2 }}
        >
          DISCLAIMER
        </Typography>

        {/* Scrollable Content */}
        <Box
          id="modal-description"
          sx={{
            px: 2,
            overflowY: 'auto',
            flexGrow: 1,
          }}
        >
          <Typography sx={{ fontWeight: 'bold', mt: 2 }}>
            No Attorney-Client Relationship
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Communication of information through this website and your receipt or
            use of such information does not establish an attorney-client
            relationship with S Bhasin and Associates or any of our legal
            professionals. A formal attorney-client relationship can only be
            established through direct consultation and a signed engagement
            letter. You should not act or rely upon any information contained on
            this website without seeking professional legal advice tailored to
            your specific situation.
          </Typography>

          <Typography sx={{ fontWeight: 'bold', mt: 3 }}>
            No Guarantees or Warranties
          </Typography>
          <Typography sx={{ mt: 1 }}>
            S Bhasin and Associates does not guarantee the accuracy, completeness,
            or reliability of the content provided on this website. We disclaim
            any liability for actions taken or not taken based on any or all
            content found on this website. Legal outcomes depend on individual
            case facts, and past results do not guarantee future success.
          </Typography>

          <Typography sx={{ fontWeight: 'bold', mt: 3 }}>
            Compliance & Ethical Considerations
          </Typography>
          <Typography sx={{ mt: 1 }}>
            We have made efforts to comply with all applicable legal and ethical
            standards in creating this website. Under no circumstances will S
            Bhasin and Associates undertake any engagement that violates ethical,
            statutory, or professional conduct regulations.
          </Typography>

          <Typography sx={{ fontWeight: 'bold', mt: 3 }}>
            Copyright & Restricted Use
          </Typography>
          <Typography sx={{ mt: 1 }}>
            All materials published on this website are the copyrighted property
            of S Bhasin and Associates, unless otherwise stated. You may download
            or print portions of our content for personal, non-commercial use,
            provided that:
          </Typography>

          <ul>
            <li>The content is not altered or used misleadingly.</li>
            <li>The copyright notice remains intact.</li>
            <li>
              The material is not reproduced for commercial purposes without
              prior written consent from S Bhasin and Associates.
            </li>
          </ul>

          <Typography sx={{ mt: 1 }}>
            You may not create links to this website or reproduce any portion of
            its content without our express written permission.
          </Typography>

          <Typography sx={{ fontWeight: 'bold', mt: 3 }}>
            User Acknowledgement
          </Typography>
          <Typography sx={{ mt: 1, mb: 2 }}>
            By proceeding further and clicking on the "Accept" button, I
            acknowledge that I am accessing this website voluntarily for
            informational purposes. I confirm that no solicitation, invitation,
            or inducement has been made by S Bhasin and Associates or its members
            to create an attorney-client relationship through this website. I
            also confirm that I have read and understood this disclaimer.
          </Typography>

          <Typography sx={{ mb: 3 }}>
            If you wish to discuss potential legal representation, please
            contact us directly using the information provided on our website.
          </Typography>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2,
            borderTop: '1px solid #ccc',
          }}
        >
          <Button variant="contained" onClick={handleAccept}>
            Accept
          </Button>
          <Button variant="contained" color="secondary" onClick={handleDecline}>
            Decline
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
