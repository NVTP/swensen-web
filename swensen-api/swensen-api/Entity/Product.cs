using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace swensen_api.Entity
{
	[Table("Product")]
	public class Product : BaseEntity
	{
		public string NameProduct { get; set; }

		public string Category { get; set; }
	}
}

