import { Box } from '@mui/material';
import Icon from '@/gui/Atoms/Icon/Icon';
import Typography from '@/gui/Atoms/Typography/Typography';
import type { CollectionItem as CollectionItemType, CollectionInteraction } from './Collection.types';

type Props = {
  item: CollectionItemType;
  interaction: CollectionInteraction;
  isDragSource: boolean;
  isDropTarget: boolean;
  onPointerDown: (id: string) => void;
  onPointerUp: () => void;
  onClick: (item: CollectionItemType) => void;
  onDragStart: (id: string, e: React.DragEvent) => void;
  onDragOver: (id: string, e: React.DragEvent) => void;
  onDrop: (id: string) => void;
  onDragLeave: () => void;
};

export default function CollectionItem({
  item, interaction, isDragSource, isDropTarget,
  onPointerDown, onPointerUp, onClick,
  onDragStart, onDragOver, onDrop, onDragLeave,
}: Props) {
  const isWiggle = interaction === 'wiggle' || interaction === 'dragging';

  return (
    <Box
      draggable={isWiggle}
      onPointerDown={() => onPointerDown(item.id)}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onClick={() => !isWiggle && onClick(item)}
      onDragStart={e => onDragStart(item.id, e)}
      onDragOver={e => onDragOver(item.id, e)}
      onDrop={() => onDrop(item.id)}
      onDragLeave={onDragLeave}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0.75,
        cursor: isWiggle ? 'grab' : 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        opacity: isDragSource ? 0.3 : 1,
        transition: 'opacity 0.15s ease, transform 0.15s ease',
        animation: isWiggle && !isDragSource ? 'col-wiggle 0.22s ease-in-out infinite alternate' : 'none',
        outline: isDropTarget ? '2px solid' : 'none',
        outlineColor: 'primary.main',
        borderRadius: 2,
        p: 0.5,
      }}
    >
      {/* Icon / image cell */}
      <Box
        sx={{
          width: 52, height: 52,
          borderRadius: 2.5,
          bgcolor: item.color ?? 'action.selected',
          border: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {item.image ? (
          <Box component="img" src={item.image} alt={item.label}
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : item.icon ? (
          <Box sx={{ fontSize: 26, lineHeight: 1 }}>{item.icon}</Box>
        ) : (
          <Icon name="crop_square" fontSize="1.4rem" />
        )}
      </Box>

      {/* Label */}
      <Typography
        variant="caption"
        sx={{
          fontSize: '0.7rem',
          fontWeight: 500,
          textAlign: 'center',
          lineHeight: 1.2,
          maxWidth: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          color: 'text.primary',
        }}
      >
        {item.label}
      </Typography>
    </Box>
  );
}
