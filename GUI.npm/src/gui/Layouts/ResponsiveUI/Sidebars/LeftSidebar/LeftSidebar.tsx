// LeftSidebar.tsx
import clsx from 'clsx';
import { LeftSidebarElement } from './LeftSidebar.types';
import LeftSidebarLink from './components/LeftSidebarLink/LeftSidebarLink';
import LeftSidebarMenu from './components/LeftSidebarMenu/LeftSidebarMenu';
import LeftSidebarAction from './components/LeftSidebarAction/LeftSidebarAction';
import LeftSidebarToggleButton from './components/LeftSidebarToggleButton/LeftSidebarToggleButton';
import { useLeftSidebar, useUpdateInsets } from '@/gui/hooks';
import { Box } from '@/gui/components/atoms';
import { useEffect } from 'react';

const LeftSidebar = ({
  elements = [],
  className
}: {
  elements: LeftSidebarElement[];
  className?: string;
}) => {
  const { view, setView } = useLeftSidebar();

  const setInsets = useUpdateInsets();

  useEffect(() => {
    if (typeof setInsets !== 'function') return;
    const desired = view === 'expanded' ? 264 : view === 'rail' ? 72 : 0;
    setInsets({ left: desired });
    return () => setInsets({ left: 0 });
  }, [setInsets, view]);

  const renderElements = () =>
    elements.map((el, idx) => {
      if (el.type === 'link') return <LeftSidebarLink key={idx} view={view} {...el.props} />;
      if (el.type === 'menu') return <LeftSidebarMenu key={idx} view={view} {...el.props} />;
      if (el.type === 'action') return <LeftSidebarAction key={idx} view={view} {...el.props} />;
      return null;
    });

  if (view === 'rail') {
    return (
      <Box
        component="aside"
        className={clsx('LeftSidebar', className)}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          width: '72px',
          overflow: 'hidden',
          borderRight: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box
          component="header"
          sx={{
            flexShrink: 0,
            borderBottom: '1px solid',
            borderColor: 'divider',
            height: 'var(--gui-nav-height, 48px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: 1.5,
            py: 0,
            gap: 1.25,
          }}
        >
          <LeftSidebarToggleButton
            expanded={view === ('expanded' as any)}
            onToggle={() => setView(view === 'rail' ? 'expanded' : 'rail')}
          />
        </Box>
        <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>{renderElements()}</Box>
        <Box
          component="footer"
          sx={{
            flexShrink: 0,
            p: '1rem',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        />
      </Box>
    );
  }

  if (view === 'mobile') {
    return (
      <Box
        component="aside"
        className={clsx('LeftSidebar', className)}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          height: '100vh',
          width: '100vw',
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000,
          boxShadow: 3,
          overflow: 'hidden',
          borderRight: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box
          component="header"
          sx={{
            flexShrink: 0,
            borderBottom: '1px solid',
            borderColor: 'divider',
            height: 'var(--gui-nav-height, 48px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: 1.5,
            py: 0,
            gap: 1.25,
          }}
        >
          <LeftSidebarToggleButton
            expanded={view === ('expanded' as any)}
            onToggle={() => setView(view === 'mobile' ? 'rail' : 'mobile')}
          />
        </Box>
        <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>{renderElements()}</Box>
        <Box
          component="footer"
          sx={{
            flexShrink: 0,
            p: '1rem',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        />
      </Box>
    );
  }

  // Default to 'expanded' view
  return (
    <Box
      component="aside"
      className={clsx('LeftSidebar', className)}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '264px',
        overflow: 'hidden',
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box
        component="header"
        sx={{
          flexShrink: 0,
          borderBottom: '1px solid',
          borderColor: 'divider',
        height: 'var(--gui-nav-height, 48px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: 1.5,
          py: 0,
          gap: 1.25,
        }}
      >
        <LeftSidebarToggleButton
          expanded={view === ('expanded' as any)}
          onToggle={() => setView(view === 'expanded' ? 'rail' : 'expanded')}
        />
      </Box>
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>{renderElements()}</Box>
      <Box
        component="footer"
        sx={{
          flexShrink: 0,
          p: '1rem',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      />
    </Box>
  );
};

export default LeftSidebar;
