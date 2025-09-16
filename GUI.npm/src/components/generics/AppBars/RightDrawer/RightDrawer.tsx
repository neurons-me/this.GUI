import React from "react";
import Icon from "../../../../themes/icons/Icon";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Collapse,
} from "@/gui/primitives";
import { Link as RouterLink } from "react-router-dom";
import { useGuiTheme, useGuiMediaQuery } from "@/gui";
import type { GuiTheme } from "@/gui";
import type * as ReactTypes from "react";
export type RightDrawerIcon =
  | string
  | ReactTypes.ComponentType<any>
  | React.ReactNode;

export type RightDrawerItem = {
  type?: "label";
  label?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  icon?: RightDrawerIcon;
  iconColor?: string;
  children?: RightDrawerItem[];
};

export type RightContext = {
  title?: string;
  items: RightDrawerItem[];
};

export type RightContextDrawerProps = {
  rightContext?: RightContext;
  drawerWidth?: number;
};

const drawerStyles = (
  theme: GuiTheme,
  width: number
) => ({
  width,
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.background.paper
      : theme.palette.background.default,
  top: "var(--gui-nav-height, 48px)",
  height: "calc(100vh - var(--gui-nav-height, 48px))",
});

function DrawerContent({ rightContext }: { rightContext?: RightContext }) {
  const { title, items: contextItems } = rightContext || {};
  const items = Array.isArray(contextItems) ? contextItems : [];
  const [openItems, setOpenItems] = React.useState<Record<number, boolean>>({});
  const toggleOpen = (index: number) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Box role="presentation">
      {title && (
        <Box
          sx={{ px: 2, pt: 2, pb: 2, borderBottom: "1px solid", borderColor: "divider" }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>
      )}
      <List>
        {items.map((item, index) => {
          if (item.type === "label") {
            return (
              <ListItem key={index} sx={{ px: 2, py: 1.5, justifyContent: "center" }}>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    textAlign: "center",
                    backgroundColor: (theme) => theme.palette.action.hover,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    width: "100%",
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
                  component={item.href ? RouterLink : "div"}
                  to={item.href}
                  onClick={
                    hasChildren
                      ? () => toggleOpen(index)
                      : !item.href && item.onClick
                      ? item.onClick
                      : undefined
                  }
                  sx={{
                    "& .MuiListItemText-primary": { fontWeight: 400 },
                  }}
                >
                  {item.icon ? (
                    <ListItemIcon sx={{ minWidth: 24, mr: 1 }}>
                      {typeof item.icon === "string" ? (
                        <Icon name={item.icon} iconColor={item.iconColor} size={18} />
                      ) : typeof item.icon === "function" ? (
                        React.createElement(item.icon as ReactTypes.ComponentType<any>)
                      ) : (
                        item.icon
                      )}
                    </ListItemIcon>
                  ) : null}
                  <ListItemText primary={item.label} />
                  {hasChildren &&
                    (isOpen ? (
                      <Icon name="mui:ExpandLess" size={18} />
                    ) : (
                      <Icon name="mui:ExpandMore" size={18} />
                    ))}
                </ListItemButton>
              </ListItem>
              {hasChildren && (
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <Box sx={{ mr: 2, borderRight: "1px dashed", pr: 2 }}>
                    {(item.children ?? []).map((child, childIndex) => (
                      <ListItem key={childIndex} disablePadding>
                        <ListItemButton
                          component={child.href ? RouterLink : "div"}
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
                          {child.icon ? (
                            <ListItemIcon sx={{ minWidth: 24, mr: 1 }}>
                              {typeof child.icon === "string" ? (
                                <Icon
                                  name={child.icon}
                                  iconColor={child.iconColor}
                                  size={18}
                                />
                              ) : typeof child.icon === "function" ? (
                                React.createElement(
                                  child.icon as ReactTypes.ComponentType<any>
                                )
                              ) : (
                                child.icon
                              )}
                            </ListItemIcon>
                          ) : null}
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

export default function RightContextDrawer({
  rightContext,
  drawerWidth = 260,
}: RightContextDrawerProps) {
  const theme = useGuiTheme();
  const isMobile = useGuiMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);
  const isPermanent = !isMobile;
  React.useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);
  React.useEffect(() => {
    const setInsets = theme?.updateInsets;
    const currentRight = theme?.layout?.insets?.right ?? 0;
    if (typeof setInsets === "function") {
      const desired = isPermanent ? drawerWidth : 0;
      if (currentRight !== desired) {
        setInsets({ right: desired });
      }
      return () => {
        const rightOnCleanup = theme?.layout?.insets?.right ?? 0;
        if (rightOnCleanup !== 0) setInsets({ right: 0 });
      };
    }
  }, [isPermanent, drawerWidth]);
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
              width: drawerWidth,
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
          "& .MuiDrawer-paper": drawerStyles(theme, drawerWidth),
        }}
      >
        <DrawerContent rightContext={rightContext} />
      </Drawer>
    </>
  );
}