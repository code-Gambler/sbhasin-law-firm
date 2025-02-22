import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    width: '80%',
};

export default function AutoOpenModal() {
    const [open, setOpen] = React.useState(false);

    // Automatically open the modal when the component is mounted
    React.useEffect(() => {
        setOpen(true);
    }, []);

    const handleClose = () => setOpen(false); // Close the modal

    const handleAccept = () => {
        setOpen(false); // Close the modal
      };
    
      const handleDecline = () => {
        window.open('about:blank', '_self').close(); // Close the current tab
      };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        DISCLAIMER
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <p><strong>No Attorney-Client Relationship</strong></p>
                        <p>Communication of information through this website and your receipt or use of such information does not establish an attorney-client relationship with S Bhasin and Associates or any of our legal professionals. A formal attorney-client relationship can only be established through direct consultation and a signed engagement letter. You should not act or rely upon any information contained on this website without seeking professional legal advice tailored to your specific situation.</p>

                        <p><strong>No Guarantees or Warranties</strong></p>
                        <p>S Bhasin and Associates does not guarantee the accuracy, completeness, or reliability of the content provided on this website. We disclaim any liability for actions taken or not taken based on any or all content found on this website. Legal outcomes depend on individual case facts, and past results do not guarantee future success.</p>

                        <p><strong>Compliance & Ethical Considerations</strong></p>
                        <p>We have made efforts to comply with all applicable legal and ethical standards in creating this website. Under no circumstances will S Bhasin and Associates undertake any engagement that violates ethical, statutory, or professional conduct regulations.</p>

                        <p><strong>Copyright & Restricted Use</strong></p>
                        <p>All materials published on this website are the copyrighted property of S Bhasin and Associates, unless otherwise stated. You may download or print portions of our content for personal, non-commercial use, provided that:</p>
                        <ul>
                            <li>The content is not altered or used misleadingly.</li>
                            <li>The copyright notice remains intact.</li>
                            <li>The material is not reproduced for commercial purposes without prior written consent from S Bhasin and Associates.</li>
                        </ul>
                        <p>You may not create links to this website or reproduce any portion of its content without our express written permission.</p>

                        <p><strong>User Acknowledgement</strong></p>
                        <p>By proceeding further and clicking on the "I Agree" button, I acknowledge that I am accessing this website voluntarily for informational purposes. I confirm that no solicitation, invitation, or inducement has been made by S Bhasin and Associates or its members to create an attorney-client relationship through this website. I also confirm that I have read and understood this disclaimer.</p>

                        <p>If you wish to discuss potential legal representation, please contact us directly using the information provided on our website.</p>

                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                        <Button onClick={handleAccept} variant="contained" color="primary">
                            Accept
                        </Button>
                        <Button onClick={handleDecline} variant="contained" color="secondary">
                            Decline
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
