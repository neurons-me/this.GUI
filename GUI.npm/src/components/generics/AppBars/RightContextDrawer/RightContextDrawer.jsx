import React from 'react';
import * as Icons from 'react-feather';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailIcon from '@mui/icons-material/Email';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PowerIcon from '@mui/icons-material/Power';
import MemoryIcon from '@mui/icons-material/Memory';
import BoltIcon from '@mui/icons-material/Bolt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InsightsIcon from '@mui/icons-material/Insights';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ChatIcon from '@mui/icons-material/Chat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SyncIcon from '@mui/icons-material/Sync';
import LoopIcon from '@mui/icons-material/Loop';
import CachedIcon from '@mui/icons-material/Cached';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MessageIcon from '@mui/icons-material/Message';
import ForumIcon from '@mui/icons-material/Forum';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DnsIcon from '@mui/icons-material/Dns';
import LayersIcon from '@mui/icons-material/Layers';
import SecurityIcon from '@mui/icons-material/Security';
import PolicyIcon from '@mui/icons-material/Policy';
const MUI_ICONS = {
  // Charts / insights / money
  BarChart: BarChartIcon,
  Insights: InsightsIcon,
  AttachMoney: AttachMoneyIcon,
  TrendingUp: TrendingUpIcon,

  // Mail / comms
  Email: EmailIcon,
  MailOutline: MailOutlineIcon,
  AlternateEmail: AlternateEmailIcon,
  Message: MessageIcon,
  Chat: ChatIcon,
  ChatBubbleOutline: ChatBubbleOutlineIcon,
  Forum: ForumIcon,
  WhatsApp: WhatsAppIcon,
  Telegram: TelegramIcon,

  // AI / bots / ML
  Memory: MemoryIcon,
  SmartToy: SmartToyIcon,
  Psychology: PsychologyIcon,
  AutoAwesome: AutoAwesomeIcon,

  // Automation / ops
  Bolt: BoltIcon,
  Power: PowerIcon,
  Autorenew: AutorenewIcon,
  Sync: SyncIcon,
  Loop: LoopIcon,
  Cached: CachedIcon,
  Settings: SettingsIcon,
  Build: BuildIcon,
  Schedule: ScheduleIcon,
  CalendarMonth: CalendarMonthIcon,

  // Business / commerce
  BusinessCenter: BusinessCenterIcon,
  ShoppingCart: ShoppingCartIcon,

  // Infra / data / security
  Cloud: CloudIcon,
  Code: CodeIcon,
  Storage: StorageIcon,
  Dns: DnsIcon,
  Layers: LayersIcon,
  Security: SecurityIcon,
  Policy: PolicyIcon,
};
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
                      <Box display="flex" alignItems="center" sx={{ color: item.iconColor || 'inherit' }}>
                        {(() => {
                          const IconComp =
                            (typeof item.icon === 'string' && (MUI_ICONS[item.icon] || Icons[item.icon])) ||
                            (typeof item.icon === 'function' ? item.icon : null);
                          return IconComp ? <IconComp fontSize="small" /> : (typeof item.icon !== 'string' ? item.icon : null);
                        })()}
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
                              <Box display="flex" alignItems="center" sx={{ color: child.iconColor || 'inherit' }}>
                                {(() => {
                                  const IconComp =
                                    (typeof child.icon === 'string' && (MUI_ICONS[child.icon] || Icons[child.icon])) ||
                                    (typeof child.icon === 'function' ? child.icon : null);
                                  return IconComp ? <IconComp fontSize="small" /> : (typeof child.icon !== 'string' ? child.icon : null);
                                })()}
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
