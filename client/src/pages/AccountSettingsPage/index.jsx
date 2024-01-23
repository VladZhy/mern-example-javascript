import AccountSettingsForm from 'features/users/components/AccountSettingsForm';
import './styles.css';

const AccountSettingsPage = () => {
  return (
    <div className="account-settings-page-container">
      <h1 className="account-settings-page__heading">Account Settings</h1>
      <AccountSettingsForm className="account-settings-page__form" />
    </div>
  );
};

export default AccountSettingsPage;
