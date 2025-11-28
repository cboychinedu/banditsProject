// System steps 
const systemSteps = [
  {
    key: 'dataAcquisition',
    title: '1. Drone Data Acquisition',
    description: 'The system reads real-time video or still image data captured by a high-resolution surveillance drone patrolling the target area.',
    icon: '🚁', // Emoji representing a drone
  },
  {
    key: 'mlProcessing',
    title: '2. Machine Learning Analysis',
    description: 'A powerful machine learning model analyzes the drone feed, running real-time image recognition algorithms to detect and classify potential bandit presence.',
    icon: '🧠', // Emoji representing ML/processing
  },
  {
    key: 'notificationDispatch',
    title: '3. Alert & Push Notification',
    description: 'If a bandit is identified, an alert is sent instantly to the central server, which then triggers a high-priority push notification to this mobile application.',
    icon: '🚨', // Emoji representing an alert
  },
];

// Exporting the system steps 
export default systemSteps; 