import { useEffect } from 'react';
import { Box } from '@mui/material';
import { GlobalStyles } from '@mui/system';
import Typography from '@/gui/Atoms/Typography/Typography';
import CollectionItemCell from './CollectionItem';
import CollectionGroupCell from './CollectionGroup';
import { useCollection } from './useCollection';
import type { CollectionItem, CollectionProps } from './Collection.types';

const COLUMNS: Record<string, number> = {
  grid: 4,
  rail: 1,
  sidebar: 2,
  mobile: 3,
};

export default function Collection({
  collection,
  surface = 'grid',
  columns,
  onSelect,
  onChange,
  renderItem,
  sx,
}: CollectionProps) {
  const cols = columns ?? COLUMNS[surface] ?? 4;

  const {
    interaction, dragSourceId, dropTargetId, expandedGroupId,
    handlePointerDown, handlePointerUp, cancelLongPress,
    stopWiggle, handleDragStart, handleDragOver, handleDrop,
    expandGroup, collapseGroup, renameGroup,
  } = useCollection(collection, onChange);

  // Escape exits wiggle
  useEffect(() => {
    if (interaction !== 'wiggle') return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') stopWiggle(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [interaction, stopWiggle]);

  const clearDragLeave = () => {};

  // Resolve items belonging to a group
  const groupItems = (groupId: string) => {
    const group = (collection.groups ?? []).find(g => g.id === groupId);
    if (!group) return [];
    return group.itemIds
      .map(id => collection.items.find(i => i.id === id))
      .filter(Boolean) as CollectionItem[];
  };

  const handleSelect = (item: CollectionItem) => {
    onSelect?.(item);
  };

  // Expanded group overlay
  const expandedGroup = expandedGroupId
    ? (collection.groups ?? []).find(g => g.id === expandedGroupId)
    : null;

  return (
    <>
      <GlobalStyles
        styles={{
          '@keyframes col-wiggle': {
            from: { transform: 'rotate(-1.5deg)' },
            to:   { transform: 'rotate(1.5deg)' },
          },
        }}
      />

      <Box
        sx={{ position: 'relative', width: '100%', ...sx }}
        onClick={e => {
          if (interaction === 'wiggle' && e.target === e.currentTarget) stopWiggle();
        }}
      >
        {/* Collection label */}
        {collection.label && (
          <Typography
            variant="caption"
            sx={{ display: 'block', mb: 1, color: 'text.secondary', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '0.7rem' }}
          >
            {collection.label}
          </Typography>
        )}

        {/* Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: 1,
          }}
        >
          {/* Loose items */}
          {collection.items.map(item =>
            renderItem ? (
              <Box key={item.id}>{renderItem(item)}</Box>
            ) : (
              <CollectionItemCell
                key={item.id}
                item={item}
                interaction={interaction}
                isDragSource={dragSourceId === item.id}
                isDropTarget={dropTargetId === item.id}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onClick={handleSelect}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onDragLeave={clearDragLeave}
              />
            )
          )}

          {/* Groups */}
          {(collection.groups ?? []).map(group => (
            <CollectionGroupCell
              key={group.id}
              group={group}
              items={groupItems(group.id)}
              interaction={interaction}
              isExpanded={expandedGroupId === group.id}
              isDropTarget={dropTargetId === group.id}
              onClick={expandGroup}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragLeave={clearDragLeave}
              onLabelChange={renameGroup}
            />
          ))}
        </Box>

        {/* Wiggle mode hint */}
        {interaction === 'wiggle' && (
          <Typography
            variant="caption"
            onClick={stopWiggle}
            sx={{
              display: 'block',
              mt: 1.5,
              textAlign: 'center',
              color: 'text.secondary',
              cursor: 'pointer',
              fontSize: '0.7rem',
              '&:hover': { color: 'text.primary' },
            }}
          >
            Drag to group · tap to finish
          </Typography>
        )}

        {/* Expanded group overlay */}
        {expandedGroup && (
          <Box
            onClick={collapseGroup}
            sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: 'background.paper',
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              p: 2,
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, textAlign: 'center' }}
            >
              {expandedGroup.label}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: `repeat(${Math.min(cols, 3)}, 1fr)`,
                gap: 1,
              }}
              onClick={e => e.stopPropagation()}
            >
              {groupItems(expandedGroup.id).map(item => (
                <CollectionItemCell
                  key={item.id}
                  item={item}
                  interaction="idle"
                  isDragSource={false}
                  isDropTarget={false}
                  onPointerDown={() => {}}
                  onPointerUp={() => {}}
                  onClick={handleSelect}
                  onDragStart={() => {}}
                  onDragOver={() => {}}
                  onDrop={() => {}}
                  onDragLeave={() => {}}
                />
              ))}
            </Box>
            <Typography
              variant="caption"
              sx={{ textAlign: 'center', color: 'text.secondary', cursor: 'pointer', fontSize: '0.7rem' }}
            >
              tap outside to close
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
}
