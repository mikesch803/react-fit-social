import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./EditProfileModal.css";
import { editUserProfile } from "../../reducers/authSlice";
import { useDispatch } from "react-redux";
import { CameraIcon } from "../../assets/icons/icons";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

export function EditProfileModal({ profileUser }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const [editProfile, setEditProfile] = React.useState({ ...profileUser });

  React.useEffect(() => {
    setEditProfile(editProfile);
  }, [editProfile]);

  const imgUploadHanlder = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const uploadedImage = reader.result;
        setEditProfile({ ...editProfile, userAvatar: uploadedImage });
      });
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">
        Edit Profile
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ display: "flex" }}
          >
            Edit Profile
            <Button
              variant="contained"
              className="btn-save"
              onClick={() => {
                dispatch(editUserProfile(editProfile));
                handleClose();
              }}
            >
              save
            </Button>
          </Typography>
          <div className="profile-avatar">
            <img
              src={editProfile.userAvatar}
              alt="profile-pic"
              className="profile-img edit-profile-pic mb-half"
            />
            <input
              className="input-file"
              type="file"
              onChange={(e) => imgUploadHanlder(e)}
            />
            <button className="btn btn-icon">
              <CameraIcon />
            </button>
          </div>
          <label className="ft-grey">First Name</label>
          <input
            className="form-input mb-half"
            name="firstName"
            value={editProfile.firstName}
            onChange={(e) =>
              setEditProfile({
                ...profileUser,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label className="ft-grey">Last Name</label>
          <input
            className="form-input mb-half"
            name="lastName"
            value={editProfile.lastName}
            onChange={(e) =>
              setEditProfile({
                ...profileUser,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label className="ft-grey">Bio</label>
          <textarea
            className="textbox textbox-bio"
            name="bio"
            rows={7}
            value={editProfile.bio}
            onChange={(e) =>
              setEditProfile({
                ...profileUser,
                [e.target.name]: e.target.value,
              })
            }
          />
        </Box>
      </Modal>
    </div>
  );
}
