import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount, useManageSubscription } from "../../../../hooks";
import Dropdown from "../../../general/Dropdown/Dropdown";
import NotificationMuteIcon from "../../../general/Icon/NotificationMuteIcon";
import SettingIcon from "../../../general/Icon/SettingIcon";
import "./AppNotificationDropdown.scss";

interface IAppNotificationDropdownProps {
  notificationId: string;
  dropdownPlacement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
  w: string;
  h: string;
  closeDropdown: () => void;
}

const AppNotificationDropdown: React.FC<IAppNotificationDropdownProps> = ({
  notificationId,
  dropdownPlacement = "bottomRight",
  w,
  h,
  closeDropdown,
}) => {
  const { account } = useAccount();
  const nav = useNavigate();
  const { unsubscribe } = useManageSubscription({ account });

  const handleUnsubscribe = useCallback(() => {
    closeDropdown();
    unsubscribe();
  }, [closeDropdown, unsubscribe]);

  const handleOpenNotificationPreferencesModal = useCallback(() => {
    nav("/preferences");
    closeDropdown();
  }, [closeDropdown, nav]);

  return (
    <Dropdown
      btnShape="square"
      h={h}
      w={w}
      dropdownPlacement={dropdownPlacement}
    >
      <div className="AppNotificationDropdown__actions">
        <button onClick={handleUnsubscribe}>
          <NotificationMuteIcon />
          <span>Unsubscribe</span>
        </button>
        <button onClick={handleOpenNotificationPreferencesModal}>
          <SettingIcon />
          <span>Preferences</span>
        </button>
      </div>
    </Dropdown>
  );
};

export default AppNotificationDropdown;
