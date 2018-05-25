<?php
/**
 * Created by PhpStorm.
 * User: 11520
 * Date: 2018/1/13
 * Time: 15:20
 */

class Article_model  extends  CI_Model
{
  //---------游客获取界面显示文章数目--------------
   public function get_article_list($offset,$page_size){
       //        $sql = "select * from t_article a ,t_article_type t where a.type_id = t.type_id";
    $this->db->select('*');
    $this->db->from('t_article a');
    $this->db->join('t_article_type t', 'a.type_id = t.type_id','left');
    //----第一个参数为偏移的位数（每页数量），第二个参数为偏移量
    $this->db->limit($page_size,$offset);//对文章显示数目的限制；
    $query = $this->db->get();
    return $query->result();

   }
   //------计算总条数-------------
    public function get_count_article(){

        return $this->db->count_all('t_article');
    }

//    public  function get_article_type($user_id){
//        $sql ="select * from
//                (select count(*) num,a.type_id
//                 from t_article a where a.user_id = $user_id
//                GROUP BY a.type_id) nt,
//                t_article_type t
//                where t.type_id = nt.type_id";
//
//        $query = $this->db->query($sql);
//        return $query->result();
//
//    }



    //-------------游客计算分类---------------
    public  function get_article_type(){
        $sql ="select * from
                (select count(*) num,a.type_id
                 from t_article a 
                GROUP BY a.type_id) nt,
                t_article_type t 
                where t.type_id = nt.type_id";

        $query = $this->db->query($sql);
        return $query->result();

    }

//---------------登录后获取本人文章分类---------
    public  function get_article_type_login($user_id){
//        $sql ="select * from
//                (select count(*) num,a.type_id
//                 from t_article a where a.user_id = $user_id
//                GROUP BY a.type_id) nt,
//                t_article_type t
//                where t.type_id = nt.type_id";
        $sql ="select * ,(select count(*)  from 
                t_article a 
              where a.type_id = t.type_id) num
              from  t_article_type t 
              where t.user_id=$user_id";
        $query = $this->db->query($sql);
        return $query->result();

    }
        //------计算本人文章条数-------------
    public function get_count_article_login($User_id){
        $query = $this->db->get_where('t_article', array('user_id' => $User_id));
        return count($query->result());
    }

    //------------登录者获取显示文章数目----------------------
    public function get_article_list_login($offset,$page_size,$user_id){
        //        $sql = "select * from t_article a ,t_article_type t where a.type_id = t.type_id";
        $this->db->select('*');
        $this->db->from('t_article a ');
        $this->db->join('t_article_type t', 'a.type_id = t.type_id','left');
        $this->db->where('a.user_id',$user_id);
        $this->db->order_by('a.article_id','desc');
        //----第一个参数为偏移的位数（每页数量），第二个参数为偏移量
        $this->db->limit($page_size,$offset);//对文章显示数目的限制；
        $query = $this->db->get();
        return $query->result();

    }

//---------------------获取文章分类通过用户Id---------------------------
    public  function  get_article_type_by_user_id($user_id){
        $query=$this->db->get_where('t_article_type',array('user_id'=>$user_id));
        return $query->result();
    }

//--------------------添加文章--------------------
    public function publish_blog($article){
        $this->db->insert('t_article',$article);
        return $this->db->affected_rows();
    }
//-----------------添加分类-----------------------
    public function add_type($name,$user_id){
        $this->db->insert('t_article_type',array(
            'type_name'=>$name,
            'user_id'=>$user_id
        ));
        return $this->db->affected_rows();
    }
//----------------修改类别------------------------
    public  function  update_type($name,$type_id){
        $this->db->where('type_id', $type_id);
        $this->db->update('t_article_type', array(
            "type_name" => $name,
        ));
        return $this->db->affected_rows();
    }
//----------------删除类别---------------------------------
    public function del_type($type_id){
        $this->db->delete('t_article_type', array('type_id' => $type_id));
        return $this->db->affected_rows();
    }
//----------------校验类名----------------------------------
    public function get_type_by_id_userid($user_id,$type_id){
        $query = $this->db->get_where('t_article_type',array(
            'user_id'=>$user_id,
            'type_id'=>$type_id
        ));
        return $query->result();
    }
//-------------------获取文章信息(分页)----------------------
    public function  get_article($offset,$page_size,$User_id){
//        $query = $this->db->get_where('t_article', array('user_id' => $User_id));
        $this->db->select('*');
        $this->db->from('t_article a ');
        $this->db->where('a.user_id',$User_id);
        $this->db->limit($page_size,$offset);//对文章显示数目的限制；
        $query = $this->db->get();
        return $query->result();
    }
//-----------------获取本文章信息----------------------------
    public function get_article_by_id($id){
        $query = $this->db->get_where('t_article',array('article_id'=>$id));
        return $query->row();
    }
  //----------------获取所有文章-----------------------------
    public function get_article_all(){
        $query = $this->db->get('t_article');
        return $query->result();
    }
//------------------评论表与用户表链接------------------------
    public function get_comment_by_article_id($id){
//        $query = $this->db->get_where('t_comment',array('article_id'=>$id));

        $this->db->select('*');
        $this->db->from('t_comment c');
        $this->db->join('t_user u','c.user_id=u.user_id');
        $this->db->where('c.article_id',$id);
        return $this->db->get()->result();
    }
//    public function get_comment_by_article_id($offset,$page_size,$id){
////        $query = $this->db->get_where('t_comment',array('article_id'=>$id));
//
//        $this->db->select('*');
//        $this->db->from('t_comment c');
//        $this->db->join('t_user u','c.user_id=u.user_id');
//        $this->db->where('c.article_id',$id);
//        $this->db->limit($page_size,$offset);//对文章显示数目的限制；
//        $query = $this->db->get();
//        return $query->result();
//    }

 //--------------文章评论总数--------------------------------
    public function get_comment_count_by_article_id($id){
//        $query = $this->db->get_where('t_comment', array('article_id' => $id));
//        return count($query->result());
        $this->db->select('*');
        $this->db->from('t_comment c');
        $this->db->join('t_user u','c.user_id=u.user_id');
        $this->db->where('c.article_id',$id);
        return $this->db->get()->result();
    }
//------------------添加评论---------------------------------
    public function publish_connet($connet){
        $this->db->insert('t_comment',$connet);
        return $this->db->affected_rows();
    }
//------------------三表链接获取信息--------------------------
    public function blog_comments($user_id){
        $sql ="select * 
            from t_user u,
            t_article a,
            t_comment c 
            where c.user_id = u.user_id 
            and
             c.article_id = a.article_id
            and a.user_id = $user_id";

        return $this->db->query($sql)->result();
    }


//--------------------删除文章---------------------------------
    public function del_article_by_id($ids){
        $this->db->where_in('article_id',$ids);
        $this->db->delete('t_article');
        return $this->db->affected_rows();
    }
//-------------------添加留言---------------------
    public function add_msg($msg){
        $this->db->insert('t_message',$msg);
        return $this->db->affected_rows();
    }
  //------------------获取未读留言-----------------------------
    public function get_msg_count($user_id){

        $query = $this->db->get_where('t_message',array('receiver'=>$user_id,'is_read'=>0));
        return count($query->result());
    }


}