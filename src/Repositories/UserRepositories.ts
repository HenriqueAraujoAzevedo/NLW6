import { EntityRepository, Repository} from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
class UserRepositries extends Repository<User>{ 

}

export {UserRepositries};