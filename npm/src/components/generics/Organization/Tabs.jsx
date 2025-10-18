import { useState } from "react";
import { Tabs as MuiTabs, Tab, Box, Typography } from "@mui/material";

/**
 * Tabs Component
 * A simple tab system to switch between different content sections.
 *
 * Props:
 * - tabs: Array of objects { label, content } (required).
 * - initialIndex: Index of the tab to show first (default: 0).
 * - variant: Tabs variant ("standard" | "scrollable" | "fullWidth"). Default: "standard".
 */
export default function Tabs({ tabs = [], initialIndex = 0, variant = "standard" }) {
  const [value, setValue] = useState(initialIndex);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!tabs || tabs.length === 0) {
    return <Typography variant="body2">No tabs available.</Typography>;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <MuiTabs
        value={value}
        onChange={handleChange}
        variant={variant}
        sx={{ mb: 2 }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </MuiTabs>
      <Box sx={{ p: 2 }}>
        {tabs[value]?.content || (
          <Typography variant="body2" color="text.secondary">
            No content for this tab.
          </Typography>
        )}
      </Box>
    </Box>
  );
}