import Navbar from '../components/Navbar';
import StudentList from '../components/StudentList';
import Footer from '../components/Footer';
import AddStudentForm from '../components/AddStudentForm';

const StudentPortal = () => {
  const handleSubmit = (newStudent) => {
    // Handle submission of new student data (e.g., send data to server)
    console.log('New student data:', newStudent);
  };

  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to the Student Portal</h1>
        <StudentList />
        <AddStudentForm onSubmit={handleSubmit} />
      </main>
      <Footer />
    </div>
  );
}

export default StudentPortal;
