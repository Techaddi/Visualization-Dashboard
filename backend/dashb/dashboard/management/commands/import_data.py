# YourApp/management/commands/import_data.py

import json
from django.core.management.base import BaseCommand
from dashboard.models import Data  # Replace YourApp and YourModel with your app and model names

class Command(BaseCommand):
    help = 'Import data from JSON file to database'

    def add_arguments(self, parser):
        parser.add_argument('json_file', type=str)

    def handle(self, *args, **kwargs):
        json_file = kwargs['json_file']
        with open(json_file, encoding='utf-8') as file:
            data = json.load(file)
            for item in data:
                # Create model instances based on JSON data and save to the database
                your_model_instance = Data.objects.create(
                    end_year=item['end_year'],
                    intensity=item['intensity'],
                    sector=item['sector'],
                    topic=item['topic'],
                    insight=item['insight'],
                    url=item['url'],
                    region=item['region'],
                    start_year=item['start_year'],
                    impact=item['impact'],
                    added=item['added'],
                    published=item['published'],
                    country=item['country'],
                    relevance=item['relevance'],
                    pestle=item['pestle'],
                    source=item['source'],
                    title=item['title'],
                    likelihood=item['likelihood'],
                    # Add other fields as needed
                )
                your_model_instance.save()
        self.stdout.write(self.style.SUCCESS('Data imported successfully'))
