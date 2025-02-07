import PropTypes from 'prop-types';
import styles from './UserProfile .module.scss';

function UserProfile({ user }) {
  const { firstName, lastName, imgSrc, isMale, email } = user;
  return (
    <div className={styles.userProfile}>
      <img
        className={styles.userAvatar}
        src={imgSrc}
        alt={`${firstName}${lastName}`}
      />
      <h2 className={styles.userName}>
        {firstName} {lastName}
      </h2>
      <p className={styles.userGender}>Gender: {isMale ? 'male' : 'female'}</p>
      <p className={styles.userEmail}>Email: {email}</p>
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    isMale: PropTypes.bool,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
};

export default UserProfile;
