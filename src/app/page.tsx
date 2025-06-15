"use client"
import Curso from '@/components/curso'
import { useCourse } from './course/course';
import { CourseInterface } from './course/course.interface';


export default function Page() {
  const { courses, loading } = useCourse();

  return (
    <main>
      <h2 className="page-title">Cursos</h2>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
        {loading ? (
          <div className="flex justify-center items-center col-span-full">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>
          </div>
        ) : (
          courses.map((curso: CourseInterface) => <Curso data={curso} key={curso.id} />)
        )}
      </div>
    </main>
  );
}
