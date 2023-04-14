import { Box } from "@mui/material";
import classnames from "classnames";
import { useRef, useEffect } from "react";
import { IModalComponentProps } from "../../types/types";
import styles from "./StatsAboutUser.module.scss";

function StatsAboutUser(props: IModalComponentProps) {
  const { children, visible, setVisible } = props;
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) {
        e.preventDefault();
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <Box
      className={classnames(
        styles.modal__invisible,
        visible && styles.modal__visible,
      )}
    >
      <Box className={styles.modal__content} ref={box}>
        {children}
      </Box>
    </Box>
  );
}
export default StatsAboutUser;
