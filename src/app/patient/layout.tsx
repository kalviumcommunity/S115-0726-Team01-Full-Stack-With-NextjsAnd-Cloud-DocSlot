export const metadata = {
  title: 'Patient Dashboard',
  description: 'Patient area layout',
};

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
