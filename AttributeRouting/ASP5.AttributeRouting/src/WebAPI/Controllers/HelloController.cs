using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("[controller]/[action]/{id:int?}")]
    public class HelloController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> ListAll()
        {
            return new string[] { "value1", "value2", "hello" };
        }

        // GET api/values/5
        [HttpGet]
        public string ListById(int id)
        {
            return "value" + id;
        }
    }
}
