using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/hello")]
    public class HelloController : Controller
    {
        public IEnumerable<string> GetHello()
        {
            return new string[] { "hello1", "hello2", "a", "b" };
        }
        //public string GetHello(int id)
        //{
        //    return "hello " + id;
        //}
	}
}