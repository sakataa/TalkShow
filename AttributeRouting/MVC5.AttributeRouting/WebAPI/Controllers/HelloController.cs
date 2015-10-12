using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace WebAPI.Controllers
{
	//[RoutePrefix("{controller}")]
	//[Route("{action}/{id:int?}")]
	[Route("{controller}/{action}/{id:int?}")]
	public class Hello1Controller : ApiController
	{
		[HttpGet]
		public IEnumerable<string> HelloEveryOne()
		{
			return new string[] { "hello1", "hello2", "3", "b" };
		}
		[Route("~/hello/HelloFull/{id}/{name}")]
		[HttpGet]
		public string HelloFull(int id, string name)
		{
			return "hello " + id + " My name is: " + name;
		}
		[HttpGet]
		public string HelloById(int id)
		{
			return "hello " + id;
		}
	}
}