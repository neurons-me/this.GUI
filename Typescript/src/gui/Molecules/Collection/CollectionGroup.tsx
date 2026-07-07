import { Box } from '@mui/material';
import Typography from '@/gui/Atoms/Typography/Typography';
import type { CollectionGroup as GroupType, CollectionItem, CollectionInteraction } from './Collection.types';

type Props = {
  group: GroupType;
  items: CollectionItem[];
  interaction: CollectionInteraction;
  isExpanded: boolean;
  isDropTarget: boolean;
  onClick: (id: string) => void;
  onDragOver: (id: string, e: React.DragEvent) => void;
  onDrop: (id: string) => void;
  onDragLeave: () => void;
  onLabelChange?: (id: string, label: string) => void;
};

export default function CollectionGroup({
  group, items, interaction, isExpanded, isDropTarget,
  onClick, onDragOver, onDrop, onDragLeave, onLabelChange,
}: Props) {
  const isWiggle = interaction === 'wiggle' || interaction === 'dragging';
  const preview = items.slice(0, 4);

  return (
    <Box
      onClick={() => !isWiggle && onClick(group.id)}
      onDragOver={e => onDragOver(group.id, e)}
      onDrop={() => onDrop(group.id)}
      onDragLeave={onDragLeave}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0.75,
        cursor: isWiggle ? 'default' : 'pointer',
        userSelect: 'none',
        animation: isWiggle ? 'col-wiggle 0.22s ease-in-out infinite alternate' : 'none',
        outline: isDropTarget ? '2px solid' : 'none',
        outlineColor: 'primary.main',
        borderRadius: 2,
        p: 0.5,
      }}
    >
      {/* 2×2 icon grid inside rounded square */}
      <Box
        sx={{
          width: 52, height: 52,
          borderRadius: 2.5,
          bgcolor: 'action.selected',
          border: '1px solid',
          borderColor: isDropTarget ? 'primary.main' : 'divider',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '2px',
          p: '5px',
          overflow: 'hidden',
          flexShrink: 0,
          transition: 'border-color 0.15s ease, transform 0.15s ease',
          ...(isDropTarget && { transform: 'scale(1.06)' }),
        }}
      >
        {preview.map(item => (
          <Box
            key={item.id}
            sx={{
              borderRadius: 0.75,
              bgcolor: item.color ?? 'background.default',
              border: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.65rem',
              overflow: 'hidden',
            }}
          >
            {item.image ? (
              <Box component="img" src={item.image} alt=""
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <Box sx={{ fontSize: '0.75rem', lineHeight: 1 }}>{item.icon ?? '·'}</Box>
            )}
          </Box>
        ))}
        {/* empty slots */}
        {Array.from({ length: Math.max(0, 4 - preview.length) }).map((_, i) => (
          <Box key={`empty-${i}`} sx={{ borderRadius: 0.75, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider' }} />
        ))}
      </Box>

      {/* Editable label in wiggle, static otherwise */}
      {isWiggle && onLabelChange ? (
        <Box
          component="input"
          defaultValue={group.label}
          onBlur={e => onLabelChange(group.id, (e.target as HTMLInputElement).value)}
          onClick={e => e.stopPropagation()}
          sx={{
            fontSize: '0.7rem',
            fontWeight: 500,
            textAlign: 'center',
            border: 'none',
            background: 'transparent',
            color: 'text.primary',
            width: 64,
            outline: 'none',
            borderBottom: '1px solid',
            borderColor: 'divider',
            p: 0,
          }}
        />
      ) : (
        <Typography
          variant="caption"
          sx={{
            fontSize: '0.7rem',
            fontWeight: 500,
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: 64,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            color: 'text.primary',
          }}
        >
          {group.label}
          {items.length > 4 && (
            <Box component="span" sx={{ color: 'text.secondary' }}> +{items.length - 4}</Box>
          )}
        </Typography>
      )}
    </Box>
  );
}
