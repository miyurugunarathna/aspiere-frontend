import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exam } from '../models/exam';
import {Marks}  from '../models/marks';
import { Quiz } from '../models/quiz';
import { Enroll } from '../models/enrolltest';
import { Result } from '../models/result';
import { Answer } from '../models/answer';


@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public createExam(exam:Exam):Observable<Exam>{
    return this.http.post<Exam>(`${this.apiServerUrl}/exams`,exam);
  }
  public deleteExam(examID:String):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/exams/${examID}`);
  }
  public getAll(teacherID:String):Observable<Exam[]>{
      return this.http.get<Exam[]>(`${this.apiServerUrl}/exams/${teacherID}`);
    
  }
  public updateExam(key:String,exam:Exam):Observable<Exam>{
    return this.http.put<Exam>(`${this.apiServerUrl}/exams/${key}`,exam);
  }



  

  public createQuiz(quiz:Quiz):Observable<Quiz>{
    return this.http.post<Quiz>(`${this.apiServerUrl}/quizzes`,quiz);
  }
  public updateQuiz(qid:String,quiz:Quiz):Observable<Quiz>{
    return this.http.put<Quiz>(`${this.apiServerUrl}/quizzes/${qid}`,quiz);
  }
  public deleteQuiz(qid:String):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/quizzes/${qid}`);
  }
  public getAllByKey(examID:String):Observable<Quiz[]>{
    return this.http.get<Quiz[]>(`${this.apiServerUrl}/quizzes/quiz/${examID}`);
  }
  public getAllByTeacherID(teacherID:String):Observable<Quiz[]>{
    return this.http.get<Quiz[]>(`${this.apiServerUrl}/quizzes/teacher/${teacherID}`);
  }

  public getStudentID(teacherID:String):Observable<Enroll[]>{
    return this.http.get<Enroll[]>(`${this.apiServerUrl}/enroll/${teacherID}`);
  }




  public addResult(result:Result):Observable<Result>{
    return this.http.post<Result>(`${this.apiServerUrl}/results`,result);
  }

  public updateResult(id:String,result:Result):Observable<Result>{
    return this.http.put<Result>(`${this.apiServerUrl}/results/${id}`,result);
  }

  public deleteResult(id:String):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/results/${id}`);
  }

  public getAllStudents(teacherID:String):Observable<Result[]>{
    return this.http.get<Result[]>(`${this.apiServerUrl}/results/teacher/${teacherID}`);
  }

  
  public addAnswer(answer:Answer):Observable<Answer>{
    return this.http.post<Answer>(`${this.apiServerUrl}/answers`,answer);
  }

  
  public delete(testID:String):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/answers/${testID}`);
  }

  public getAllByKey2(key:String):Observable<Answer[]>{
    return this.http.get<Answer[]>(`${this.apiServerUrl}/answers/answer/${key}`);
  }



  
  public addMarks(key:String):Observable<Marks[]>{
    return this.http.get<Marks[]>(`${this.apiServerUrl}/marks/${key}`);
  }




}
