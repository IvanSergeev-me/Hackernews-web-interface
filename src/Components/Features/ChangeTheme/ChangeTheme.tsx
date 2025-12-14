import type { FunctionComponent } from "react";
import DropdownSelect from "../../UI/Select/DropdownSelect";
import { supportedThemes, type Themes } from "../../../Config/constants";
import type { SelectOptions, SelectOptionValue } from "../../UI/Select/types";
import { useTheme } from "../../../Hooks/useTheme";

interface ChangeThemeProps {}

const ChangeTheme: FunctionComponent<ChangeThemeProps> = () => {
  const { currentTheme, switchTheme } = useTheme();
  const themes: SelectOptions = Object.keys(supportedThemes).map((theme) => {
    return { text: theme, value: theme };
  });
  const handleChangeTheme = (theme: SelectOptionValue) => {
    switchTheme(theme as Themes);
  };
  return (
    <div>
      <DropdownSelect
        id="change-theme"
        name="change-theme"
        options={themes}
        defaultValue={currentTheme}
        onChange={handleChangeTheme}
      />
    </div>
  );
};

export default ChangeTheme;
