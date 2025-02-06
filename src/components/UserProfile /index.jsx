// import PropTypes from 'prop-types';
import styles from './UserProfile .module.scss';

const user = {
  id: '12345',
  firstName: 'User',
  lastName: 'Userenko',
  imgSrc: 'https://example.com/avatar.jpg',
  isMale: true,
  email: 'userUserenko@example.com',
  password: 'supersecurepassword123',
};

function UserProfile() {
  return (
    <div className={styles.userProfile}>
      <img
        className={styles.userAvatar}
        src={user.imgSrc}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <h2 className={styles.userName}>
        {user.firstName} {user.lastName}
      </h2>
      <p className={styles.userGender}>
        Стать: {user.isMale ? 'Чоловік' : 'Жінка'}
      </p>
      <p className={styles.userEmail}>Email: {user.email}</p>
    </div>
  );
}

// UserProfile.propTypes = {
//   user: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     firstName: PropTypes.string.isRequired,
//     lastName: PropTypes.string.isRequired,
//     imgSrc: PropTypes.string,
//     isMale: PropTypes.bool,
//     email: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default UserProfile;
