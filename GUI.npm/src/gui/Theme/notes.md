externar esto de guiprovider:
	•	insets: estado reactivo para manejar márgenes (top, left, right, bottom).
	•	updateInsetsCb: función para actualizar insets.
	•	injectInsetsIntoTheme(...): muta el theme con estos insets.


3. utils/catalog.ts
	•	tokens, manifest, mode, family. -- cambiar la palabra family

6. utils/themeUtils.ts
	•	injectInsetsIntoTheme(theme, insets, cb): añade GUI.insets al tema MUI.
    Verificar que no este redundando con lo que hace GuiProvider.

LIMPIAR -----
En GuiProvider, están vacíos:Borrar
availableFamilies: [], 
grouped: [],
--
2. tokensByMode y tokens en el manifest
	•	Aunque están tipados en ThemeManifest, no se usan en makeMuiThemeFromManifest.
	•	Actualmente se infiere tokens de manifest.modes[mode].
--
3. ThemeEntry, ThemeFamilyGroup
	•	Tipados definidos pero no usados activamente en la lógica del Provider ni en catalog.
---


Aclarar>
	GuiProvider busca themeKey desde localStorage usando usePersistentThemeKey.
    	•	Usa ese key para encontrar el tema activo en GuiThemes.
        
        