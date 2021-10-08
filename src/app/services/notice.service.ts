import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notice } from '../models/notice';
import { Question } from '../models/question';
import { Reply } from '../models/reply';
import { Enroll } from '../models/enrolltest2';
import { Enquiry } from '../models/enquiry';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { 
  
  }

  public createNotice(notice:Notice):Observable<Notice>{
    return this.http.post<Notice>(`${this.apiServerUrl}/notices`,notice);
  }
  public deleteNotice(noticeID:String):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/notices/${noticeID}`);
  }
  public getAll():Observable<Notice[]>{
      return this.http.get<Notice[]>(`${this.apiServerUrl}/notices`);
    
  }
  public updateNotice(noticeID:String,notice:Notice):Observable<Notice>{
    return this.http.put<Notice>(`${this.apiServerUrl}/notices/${noticeID}`,notice);
  }


  public addQuestion(question:Question):Observable<Question>{
    return this.http.post<Question>(`${this.apiServerUrl}/questions`,question);
  }
  public deleteQuestion(qid:String):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/questions/${qid}`);
  }
  public getAllQuestion():Observable<Question[]>{
      return this.http.get<Question[]>(`${this.apiServerUrl}/questions`);
    
  }
  public updateQuestion(qid:String,question:Question):Observable<Question>{
    return this.http.put<Question>(`${this.apiServerUrl}/questions/${qid}`,question);
  }

  public getAllByTeacherID(tid:String):Observable<Question[]>{
    return this.http.get<Question[]>(`${this.apiServerUrl}/questions/teacher/${tid}`);
  }

  public getAllByStudentID(sid:String):Observable<Question[]>{
    return this.http.get<Question[]>(`${this.apiServerUrl}/questions/student/${sid}`);
  }






  public addReply(reply:Reply):Observable<Reply>{
    return this.http.post<Reply>(`${this.apiServerUrl}/replies`,reply);
  }
  public deleteReply(replyID:String):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/replies/${replyID}`);
  }
  public getAllReplies():Observable<Reply[]>{
      return this.http.get<Reply[]>(`${this.apiServerUrl}/replies`);
    
  }
  public updateReplies(replyID:String,reply:Reply):Observable<Reply>{
    return this.http.put<Reply>(`${this.apiServerUrl}/replies/${replyID}`,reply);
  }

  public getAllBytid(tid:String):Observable<Reply[]>{
    return this.http.get<Reply[]>(`${this.apiServerUrl}/replies/reply2/${tid}`);
  }

  public getAllBysid(sid:String):Observable<Reply[]>{
    return this.http.get<Reply[]>(`${this.apiServerUrl}/replies/reply1/${sid}`);
  }

  public getStudentdetails(studentID:String):Observable<Enroll[]>{
    return this.http.get<Enroll[]>(`${this.apiServerUrl}/enroll/student/${studentID}`);
  }

  public getTeacherdetails(teacherID:String):Observable<Enroll[]>{
    return this.http.get<Enroll[]>(`${this.apiServerUrl}/enroll/teacher/${teacherID}`);
  }


  public createEnquiry(enquiry:Enquiry):Observable<Enquiry>{
    return this.http.post<Enquiry>(`${this.apiServerUrl}/enquiries`,enquiry);
  }
  public deleteEnquiry(enquiryid:String):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/enquiries/${enquiryid}`);
  }
  public getAllEnquiry():Observable<Enquiry[]>{
      return this.http.get<Enquiry[]>(`${this.apiServerUrl}/enquiries`);
    
  }


}
