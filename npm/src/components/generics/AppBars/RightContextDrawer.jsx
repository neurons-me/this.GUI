import React from 'react';
import * as Icons from 'react-feather';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Collapse,
} from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';

const drawerStyles = (theme) => ({
  width: 260,
  paddingTop: 2,
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.background.paper
      : theme.palette.background.default,
});

function DrawerContent({ rightContext }) {
  const { title, items: contextItems } = rightContext || {};
  const [openItems, setOpenItems] = React.useState({});

  const toggleOpen = (index) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Box role="presentation">
      {title && (
        <Box sx={{ px: 2, pt: 6, pb: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>
      )}
      <List>
        {contextItems.map((item, index) => {
          if (item.type === 'label') {
            return (
              <ListItem key={index} sx={{ px: 2, py: 1.5, justifyContent: 'center' }}>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    textAlign: 'center',
                    backgroundColor: theme => theme.palette.action.hover,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    width: '100%',
                  }}
                >
                  {item.label}
                </Typography>
              </ListItem>
            );
          }
          const hasChildren = Array.isArray(item.children) && item.children.length > 0;
          const isOpen = openItems[index] || false;

          return (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  component={item.href ? RouterLink : 'div'}
                  to={item.href}
                  onClick={
                    hasChildren
                      ? () => toggleOpen(index)
                      : !item.href && item.onClick
                        ? item.onClick
                        : undefined
                  }
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 400,
                    },
                  }}
                >
                  {item.icon && (
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Box display="flex" alignItems="center">
                        {typeof item.icon === 'string' && Icons[item.icon]
                          ? React.createElement(Icons[item.icon])
                          : item.icon}
                      </Box>
                    </ListItemIcon>
                  )}
                  <ListItemText primary={item.label} />
                  {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
              </ListItem>
              {hasChildren && (
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <Box sx={{ mr: 2, borderRight: "1px dashed", pr: 2 }}>
                    {item.children.map((child, childIndex) => (
                      <ListItem key={childIndex} disablePadding>
                        <ListItemButton
                          component={child.href ? RouterLink : 'div'}
                          to={child.href}
                          onClick={!child.href && child.onClick ? child.onClick : undefined}
                          sx={{
                            justifyContent: "flex-end",
                            textAlign: "right",
                            "& .MuiListItemText-primary": {
                              fontWeight: 400,
                              textAlign: "right",
                            },
                          }}
                        >
                          {child.icon && (
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <Box display="flex" alignItems="center">
                                {typeof child.icon === 'string' && Icons[child.icon]
                                  ? React.createElement(Icons[child.icon])
                                  : child.icon}
                              </Box>
                            </ListItemIcon>
                          )}
                          <ListItemText primary={child.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </Box>
                </Collapse>
              )}
            </React.Fragment>
          );
        })}
      </List>
    </Box>
  );
}

export default function RightContextDrawer({ rightContext }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  if (!rightContext || !rightContext.items?.length) return null;

  return (
    <>
      {isMobile && !open && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            zIndex: theme.zIndex.drawer + 1,
          }}
        >
          <Box
            onClick={() => setOpen(true)}
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "#fff",
              p: 1,
              borderRadius: "8px 0 0 8px",
              cursor: "pointer",
            }}
          >
            &gt;
          </Box>
        </Box>
      )}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        variant={isMobile ? "temporary" : "persistent"}
        sx={{
          "& .MuiDrawer-paper": drawerStyles(theme),
        }}
      >
        <DrawerContent rightContext={rightContext} />
      </Drawer>
    </>
  );
}
