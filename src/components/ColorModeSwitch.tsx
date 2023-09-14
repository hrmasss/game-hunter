import { useColorMode } from "@chakra-ui/react";
import styles from "./ColorModeSwitch.module.css";

export default function ColorModeSwith() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div className={styles.checkboxWrapper}>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    checked={colorMode === "dark"}
                    onChange={toggleColorMode}
                />
                <span className={styles.slider}></span>
            </label>
        </div>
    );
}
