import { Box, Typography } from "@material-ui/core";

export default function Message(props) {
  return (
    <Box mb={1}>
      <Typography variant="caption" component="p" color="secondary">
        {"*" + props.message}
      </Typography>
    </Box>
  );
}
