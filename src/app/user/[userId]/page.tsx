"use client"
import Curso from '@/components/curso'
import { useUser } from '../user';


export default function Page() {
  const { courses, loading, isAuthorized } = useUser();
  return (
    <main>
      <h2 className="page-title">Meus cursos</h2>
      {isAuthorized && !loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <Curso key={course.id} data={course} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p className="text-gray-500">Carregando cursos...</p>
        </div>
      )}
      {!isAuthorized && (
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500">Você não está autorizado a ver esta página.</p>
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <p className="text-gray-500">Carregando...</p>
        </div>
      )}
      {
        courses.length === 0 && !loading && (
          <div className="flex justify-center items-center h-screen">
            <p className="text-gray-500">Nenhum curso encontrado.</p>
          </div>
        )
      }
    </main>
  );
}
