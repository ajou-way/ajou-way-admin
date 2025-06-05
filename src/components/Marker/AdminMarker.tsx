import markerImage from '@/assets/marker.png';

const AdminMarker = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '28px',
        height: '36px',
        cursor: 'pointer',
        backgroundImage: `url(${markerImage})`,
        backgroundSize: 'contain',
      }}
    />
  );
};

export default AdminMarker;
