import { CourseInterface } from "@/app/course/course.interface"
import { formatDate } from "@/utils/formatDate"
import Image from "next/image"

export default function CursoView({ data }: { data: CourseInterface }) {
    return <div className="border flex-1 flex flex-col">
        <figure className="relative aspect-video">
            <Image src={data.cover} alt={data.name} fill />
            {data.isEnrolled && <figcaption className="text-sm p-4 bg-slate-200 absolute m-4 shadow-xl border-slate-400 border rounded-xl">Você já se inscreveu nesse curso</figcaption>}
        </figure>
        <div className="p-6 flex flex-col gap-2 flex-1">
            <h3 className="text-2xl">{data.name}</h3>
            <p>{data.description}</p>
            <div className="flex flex-row flex-wrap gap-1">
                <span className="text-xs py-1 px-2 leading-tight bg-slate-200 rounded-2xl">{data.isEnrolled} inscritos</span>
                <span className="text-xs py-1 px-2 leading-tight bg-slate-200 rounded-2xl">Inicia em {data.startDate && formatDate(data.startDate)}</span>
            </div>
        </div>
        {
            data.isEnrolled ? data.enrollmentCancelled ?
                <p className="bg-red-500 p-4 text-center">Inscrição cancelada</p> :
                <button className="text-center p-4 bg-slate-300 hover:bg-slate-400">Cancelar inscrição</button> :
                <button className="text-center p-4 bg-indigo-500 hover:bg-indigo-600 text-white">Fazer inscrição</button>
        }
    </div>
}