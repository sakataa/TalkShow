using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MVC6.Controllers
{
    public class OptionalRouteController : Controller
    {
        [Route("OptionalRoute/Index/{id:int?}")]
        public IActionResult Index(int id = 99)
        {
            return Content("[Route('OptionalRoute/Index/{id:int?}')]: " + id);
        }
    }
}
