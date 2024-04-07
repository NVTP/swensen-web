using System;
namespace swensen_api.Models
{
	public class ResponseResult
	{
		public bool status { get; set; }
		public int statusCode { get; set; }
		public string message { get; set; }
		public object data { get; set; }
	}
}

