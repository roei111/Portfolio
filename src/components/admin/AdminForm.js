import {
  Paper,
  Button,
  TextField,
  Box,
  Typography,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const AdminForm = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
      tech: [],
      img: [],
      links: { url: "", github: "", youtube: "" },
    },
  });

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "portfolio-roei-yaacobi");

    const response = await fetch(
      process.env.REACT_APP_CLOUDINARY_ENDPOINT,
      {
        method: "POST",
        body: data,
      }
    );
    const file = await response.json();
    setImageUrl(file.url);
    console.log(file);
  };

  const sumbitHandler = async (data) => {
    console.log(data);

    reset();
    setImageUrl(null);
  };

  return (
    <>
      <Paper elevation={3}>
        <form onSubmit={handleSubmit(sumbitHandler)}>
          <Box
            sx={{ display: "grid", gridRowGap: "20px", padding: "20px" }}
            margin={{ sm: "10px 100px", md: "10px 200px", lg: "10px 300px" }}
          >
            <Typography variant="h5">Create New Project</Typography>
            <Controller
              control={control}
              name="title"
              rules={{ required: true }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  helperText={error ? "סעיף זה הוא חובה" : null}
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  label={"שם פרטי"}
                  variant="outlined"
                />
              )}
            />
            <Controller
              control={control}
              name="lastName"
              rules={{ required: true }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  helperText={error ? "סעיף זה הוא חובה" : null}
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  label={"שם משפחה"}
                  variant="outlined"
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              rules={{
                required: "סעיף זה הוא חובה",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "נא להזין כתובת אימייל תקנית",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  helperText={error ? error.message : null}
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  label={"אימייל"}
                  variant="outlined"
                />
              )}
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">תמונה</FormLabel>
              {imageUrl ? (
                <img
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "scale-down",
                    marginBlock: "1rem",
                  }}
                  src={imageUrl}
                  alt="uploaded dog"
                />
              ) : null}
              <Controller
                control={control}
                rules={{ required: true }}
                name="image"
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <>
                    <Button
                      variant="contained"
                      component="label"
                      color={imageUrl ? "success" : "primary"}
                      sx={{ width: { sm: "60%", md: "40%", lg: "30%" } }}
                    >
                      {imageUrl ? "התמונה הועלתה" : "בחר תמונה"}
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        hidden
                        onChange={(e) => {
                          onChange(uploadImage(e));
                        }}
                      />
                    </Button>
                  </>
                )}
              />
            </FormControl>
            <Button variant="contained" type="sumbit">
              הוסף
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
};

export default AdminForm;
