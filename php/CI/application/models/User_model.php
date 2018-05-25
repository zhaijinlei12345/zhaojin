<?php
class User_model extends  CI_Model
{
    //---------注册帐号-------
    public function add($email,$name,$pwd,$sex,$province,$city){
        $this->db->insert("t_user",array(

            'username'=>$name,
            'password'=>$pwd,
            'email'=>$email,
            'sex'=>$sex,
            'province'=>$province,
			'city'=>$city
        ));
        return $this->db->affected_rows();
    }


//    public function add_msg($f_title,$save_draft_msg,$catalog){
//        $this->db->insert("t_comment",array(
//
//            'content'=>$save_draft_msg,
//            'title'=>$f_title,
//            'type_id'=>$catalog,
//
//        ));
//        return $this->db->affected_rows();
//    }
//	public function user_list(){
//		//$query=$this->db->get("t_user");
//		$query=$this->db->get_where("t_user");
//		 return $query->result();
//	}
//	public function del_user($id){
//		$this->db->delete('t_user',array('id'=>$id));
//		return $this->db->affected_rows();
//	}


//  public function get_user_by_email($email){
//        $query = $this->db->get_where('t_user', array('email' => $email));
//        return $query->result();
//}
//------判断邮箱是否被注册--------
    public function check_email($email)
    {
        //------判断邮箱是否被注册--------

        $query = $this->db->get_where('t_user', array('email' => $email));
       // var_dump($query->result()) ;
       // die();
        return $query->result();
    }

    public function get_user_by_id($user_id){
        $query = $this->db->get_where('t_user', array('user_id' => $user_id));
        return $query->row();
    }
//	public function update($id,$name){
//        $this->db->where('id', $id);
//        $this->db->update('t_user', array(
//            "name" => $name,
//        ));
//        return $this->db->affected_rows();
//    }
}




?>

