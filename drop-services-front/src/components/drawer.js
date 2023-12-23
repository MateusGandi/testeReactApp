import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Draggable from "react-draggable";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const TransparentDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Ajuste a opacidade conforme necessário
    backdropFilter: "blur(5px)", // Adicione isso para aplicar um efeito de desfoque
  },
}));

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({ top: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const Puller = styled(Box)(({ theme }) => ({
    height: 8,
    backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
    borderRadius: 50,
    maxWidth: "250px",
    width: "100%",
  }));

  const list = (anchor) => (
    <Draggable
      axis="y"
      handle=".handles"
      bounds={{ top: -110, bottom: 0 }}
      onDrag={toggleDrawer("top", false)}
      onClick={toggleDrawer("top", false)}
    >
      <Box
        sx={{
          width: anchor === "top" ? "auto" : 250,
          marginTop: "-8px",
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <React.Fragment key={text}>
              <ListItem disablePadding>
                <ListItemButton
                  style={{ textAlign: "center", backgroundColor: grey[800] }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
              {<Divider />}
            </React.Fragment>
          ))}
        </List>
        <div
          className="handles"
          style={{
            marginTop: "-8px",
            padding: "10px",
            height: "20px",
            backgroundColor: grey[800],
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            borderRadius: " 0 0 10px 10px",
          }}
        >
          <Puller />
        </div>
      </Box>
    </Draggable>
  );

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <React.Fragment key={"top"}>
        <Draggable
          axis="y"
          handle=".handle"
          bounds={{ top: -110, bottom: 0 }}
          onDrag={toggleDrawer("top", true)}
          onClick={toggleDrawer("top", true)}
        >
          <div
            className="handle"
            style={{
              width: "100%",
              padding: "10px",
              height: "20px",
              backgroundColor: grey[800],
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              borderRadius: " 0 0 10px 10px",
            }}
          >
            <Puller />
          </div>
        </Draggable>

        <TransparentDrawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
          {list("top")}
        </TransparentDrawer>
      </React.Fragment>
    </div>
  );
}
